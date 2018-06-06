var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var mongojs = require('mongojs');
var uuid = require('uuid');
var db = mongojs('mongodb://localhost:27017/candidateInformationTable', ['candidateInformationTables', 'evaluationSheetInformationTables']);

// Get All candidate Info
router.get('/candidateInfo', function(req, res, next){
    db.candidateInformationTables.find(function(err, candidateInformationTables){
        if(err){
            res.send(err);
        }
        res.json(candidateInformationTables);
    });
});


////
/*
router.get('/upload', function (req, res, next) {
    var filePath = "/upload"; // Or format the path using the `id` rest param
    var fileName = "jd"; // The default name the browser will use

    res.download(filePath, fileName);
}); */
///


// Get All IA Info
router.get('/newIAForm', function(req, res, next){
    db.evaluationSheetInformationTables.find(function(err, evaluationSheetInformationTables){
        if(err){
            res.send(err);
        }
        res.json(evaluationSheetInformationTables);
    });
});

// Get Single Task
router.get('/candidateInfo/:id', function(req, res, next){
    db.candidateInformationTables.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, candidate){
        if(err){
            res.send(err);
        }
        res.json(candidate);
    });
});

//Save Candidate Info
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload');
    }
    ,
    filename: function (req, file, cb) {

        const newFilename = `${(file.originalname)}`;
    //  const newFilename = `${uuid()}${path.extname(file.originalname)}`;
     // const newFilename = `${path.extname(file.originalname)}`;
      cb(null, newFilename);
      //cb(null, file.fieldname + '-' + Date.now())
    }
  })

  var upload = multer({ storage})


router.post('/candidateInfo/upload', upload.single('selectedFile'), (req, res) => {
    // ram code const selectedFile = req.selectedFile;
    res.send();
})

//code


router.post('/candidateInfo/newCandidate', function(req, res, next){
    var candidate = req.body;
    console.log("yaha aya hai");
    //console.log(req.body);
    if(!candidate.firstname || !(candidate.lastname + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.candidateInformationTables.save(candidate, function(err, candidate){
            if(err){
                res.send(err);
            }
            res.json(candidate);

        });
    }
});


// Delete Candidate Info
router.delete('/candidateInfo/:id', function(req, res, next){
    db.candidateInformationTables.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, candidate){
        if(err){
            res.send(err);
        }
        res.json(candidate);
    });
});

// Update Candidate Info
router.put('/candidateInfo/:id', function(req, res, next){
    var candidate = req.body;
    var updcandidateInfo = {};

    if(candidate.firstname){
        updcandidateInfo.firstname = candidate.firstname;
    }

    if(candidate.lastname){
        updcandidateInfo.lastname = candidate.lastname;
    }
    if(candidate.skills){
        updcandidateInfo.skills = candidate.skills;
    }
    if(candidate.email){
        updcandidateInfo.email = candidate.email;
    }
    if(candidate.phone){
        updcandidateInfo.phone = candidate.phone;
    }
    if(candidate.city){
        updcandidateInfo.city = candidate.city;
    }

    if(!updcandidateInfo){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.candidateInformationTables.update({_id: mongojs.ObjectId(req.params.id)},updcandidateInfo, {}, function(err, candidate){
            if(err){
                res.send(err);
            }
            res.json(candidate);
        });
    }
});

//Save IA Form Details Values
router.post('/newIAForm', function(req, res, next){
    var evaluator = req.body;
    console.log('inside axios',req.body);
    if(!evaluator.candidateName){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.evaluationSheetInformationTables.save(evaluator, function(err, evaluator){
            if(err){
                res.send(err);
            }
            res.json(evaluator);
        });
    }
});

module.exports = router;
