import  goods  from '@/constants/db/goods.json';

export default (req, res) => {
    res.status(200).json(goods)
}
  

// export default (req, res) => {
//   res.status(200).json({ post: req.query.id, comments })
// }