import models from '../../utils/api.json';

export default function getData(req, res) {
  res.statusCode = 200;
  res.end(JSON.stringify(models));
}