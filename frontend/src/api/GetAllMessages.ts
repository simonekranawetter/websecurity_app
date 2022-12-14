import { MessageType } from "../types";

export async function getAllMessages(): Promise<MessageType[]> {
  try {
    const res = await fetch("https://localhost:7201/api/Messages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}
