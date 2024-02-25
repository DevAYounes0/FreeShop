import { NextResponse } from "next/server";
import connect from "../../../../utils/mongoConfig";
import UsersModel from "../../../../utils/models/UsersModel";
export async function GET() {
  try {
    const result = await fetchData();
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(request) {
  const body = await request.json();
  try {
    try {
      //conect to db
      connect();
      console.log("Connected");
    } catch (error) {
      console.log(error, "Error connecting to database");
    }
    // use recieved data to sign up new user
    try {
      const isAlreadyUser = await UsersModel.find({ email: body.email });
      if (isAlreadyUser.length > 0) {
        return NextResponse.json(
          { message: "User already exists", error },
          { status: 500 }
        );
      } else {
        const newUser = new UsersModel(body);
        await newUser.save();
        return NextResponse.json({ message: "OK", body }, { status: 201 });
      }
    } catch (err) {
      console.log(err);
    }
    return NextResponse.json({ message: "OK", body }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
