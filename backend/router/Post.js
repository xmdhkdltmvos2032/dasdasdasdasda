let POST = {

    itzy:(req,res)=>{
        let yeji = req.body.itzy;
        res.send(yeji);
    }

}

module.exports = POST;