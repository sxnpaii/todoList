// Next.js API route support: https://nextjs.org/docs/api-routes/introduction"
import { todoData } from "./todoData"
export default function handler(req, res) {
  res.status(200).json(todoData)
}
