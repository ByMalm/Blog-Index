from fastapi import FastAPI
from openai import OpenAI
import os
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

fast = FastAPI()

ia = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=os.environ.get("GROQ_API_KEY")
)


class datos(BaseModel):
    respuesta: str

historial = [
    
    {"role": "system", "content": "Eres una ia"}

]

@fast.post("/IA")
def main(datos: datos):

    historial.append({"role": "user", "content": datos.respuesta})

    mes = ia.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=historial
    )


    res1 = mes.choices[0].message.content

    historial.append({"role": "assistant", "content": res1})

    return{
        "pregunta": datos.respuesta,
        "IA": res1
    }
    