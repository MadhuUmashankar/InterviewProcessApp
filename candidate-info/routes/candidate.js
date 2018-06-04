var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/candidateInformationTable', ['candidateInformationTables']);

// Get All candidate Info
router.get('/candidateInfo', function(req, res, next){
    db.candidateInformationTables.find(function(err, candidateInformationTables){
        if(err){
            res.send(err);
        }
        res.json(candidateInformationTables);
    });
});

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
router.post('/candidateInfo/newCandidate', function(req, res, next){
    var candidate = req.body;
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

