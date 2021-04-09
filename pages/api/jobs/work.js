import {myWorks} from '../../../data/work'

export default function handler(req, res) {
  res.status(200).json(myWorks)
}