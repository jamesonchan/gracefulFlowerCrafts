module.exports={
    images:{
        domains:['www.nicepng.com','wallpapercave.com','fakestoreapi.com','links.papareact.com','images.squarespace-cdn.com','cdn.chec.io']
    },
    env:{
        stripe_public_key:process.env.NEXT_STRIPE_PUBLIC_KEY,
        stripe_secret_key:process.env.NEXT_STRIPE_SECRET_KEY
    }
}