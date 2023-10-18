import { Card, Tag, Row, Col } from 'antd'
import { ReactComponent as Reactions } from './icons/reactions.svg'

function NewsCard(props) {
  const {
    post: { title, body, tags, reactions },
  } = props

  return (
    <Card title={title}>
      <Row style={{ marginBottom: '16px' }}>{body}</Row>
      <Row justify='space-between'>
        <Col>{tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Col>
        <Col align='middle'>
          <Reactions /> {reactions}
        </Col>
      </Row>
    </Card>
  )
}

export default NewsCard
