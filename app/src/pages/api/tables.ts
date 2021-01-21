import models from '../../utils/json/api.json';

export default function getData(req, res) {
  res.statusCode = 200;
  res.end(JSON.stringify(models));
}