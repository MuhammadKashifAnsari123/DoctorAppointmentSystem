import connectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/UserModal";


export async function POST(req){
    connectDB()
    try{
        const obj = await req.json();
        let newUser = await new UserModal({...obj});
        newUser = await newUser.save();
    return Response.json({
            error:false,
            msg: "User Registered Successfully",
            User: newUser
        }, {status: 201});
    } catch(e) {
        return Response.json({
            error:true,
            msg: "Some Thing Went Wrong",
        }, {status: 400});
    }
}

export async function GET(req){
    await connectDB();
    const users = await UserModal.find();
    return Response.json({
        error:false,
        msg: "User fetch Successfully",
        users,
    }, {status: 200});
}     



export async function PUT(req){}


export async function DELETE(req){}