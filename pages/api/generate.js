import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const animalNameSubmit = async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: "function insertionSort(arr){\n    for(let i = 1; i < arr.length;i++){\n        for(let j = i - 1; j > -1; j--){\n            if(arr[j + 1] < arr[j]){\n                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];\n            }\n        }\n    };\n  return arr;\n}\ntell me what does this function do?\n1.",
    temperature: 1,
    max_tokens: 3000,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

export default animalNameSubmit;
