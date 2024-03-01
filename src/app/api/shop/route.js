import { NextResponse } from "next/server";
import shopModel from "../../../../utils/models/ShopModel";
import shoppingList from "../../../app/DummyData/ShoppingData";
import connect from "../../../../utils/mongoConfig";
export async function GET() {
  try {
    return NextResponse.json({ shoppingList }, { status: 200 });
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
    try {
      await shopModel.create(body);
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
