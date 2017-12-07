import React from "react";
import { array, bool } from 'prop-types';
import { Card, List } from "antd";

export const NewsGrid = ({ data, loading }) => {
  return (
    <List
      loading={ loading }
      grid={{ gutter: 10, xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card style={{ minHeight: '300px' }} title={item.title}>{ item.anounce }</Card>
        </List.Item>
      )}
    />
  );
}

NewsGrid.propTypes = {
  loading: bool.isRequired,
  data: array.isRequired
};