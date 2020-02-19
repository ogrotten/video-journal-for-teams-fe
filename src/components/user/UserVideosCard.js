import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";

const UserVideosCard = (props) => {
	const data = props.data;
	return (
		<Card
			className="videoCard"
			size="small"
			style={{ cursor: "pointer" }}
			onClick={() => props.history.push(`/user-dashboard/video/${data.id}`)}>
			<Row gutter={[8, 8]}>
				<Col span={8}>
					<img src={data.thumbnail} height={100} width={100} />
				</Col>
				<Col span={3}>{/* Space only */}</Col>
				<Col span={8} style={{ textAlign: "left" }}>
					<p>{data.title}</p>
					{data.description && <p className="small">{data.description}</p>}
					<p className="small">{data.created_at}</p>
				</Col>
			</Row>
		</Card>
		// <Layout>
		// 		<Col span={12} style={{ textAlign: "left" }}>
		// 			<p>Feedbacks go here?</p>
		// 		</Col>
		// 	</Row>
		// </Layout>
	);
};

export default withRouter(UserVideosCard);