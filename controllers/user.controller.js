const { response,request }=require('express');


const usuariosGet=((req=request,res=response)=>{

    const params = req.query;

    res.json({
        msg:'Get API',
        params
    })
})

const usuariosPut=((req,res=response)=>{

    const {id} = req.params;

    res.json({
        msg:'Put API',
        id
    })
})

const usuariosPost=((req,res=response)=>{

    const body = req.body;
    res.status(201).json({
        msg:'Post API',
        body
    })    
})

const usuariosDelete=((req,res=response)=>{
    res.json({
        msg:'Delete API'
    })
})

const usuariosPatch=((req,res=response)=>{
    res.json({
        msg:'Pacht API'
    })
})

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}