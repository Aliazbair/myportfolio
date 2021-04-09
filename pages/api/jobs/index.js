import {Jobs} from '../../../data/job'

export default function handler(req, res) {
  res.status(200).json(Jobs)
}