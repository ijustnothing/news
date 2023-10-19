import { Card, Tag, Row, Col } from 'antd'
import { ReactComponent as Reactions } from './icons/reactions.svg'

function NewsCard(props) {
  const {
    post: { title, body, tags, reactions },
  } = props

  return (
    <Card title={title} style={{ marginBottom: '16px' }}>
      <Row
        style={{
          marginBottom: '16px',
          overflow: 'hidden',
          display: '-webkit-box',
          webkitLineClamp: '3',
          webkitBoxOrient: 'vertical',
        }}
      >
        {body}
      </Row>
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
