import React, { useEffect, useState } from "react";
import { fetchTopics } from "../api";

import { Link } from "react-router-dom";

const Topics = () => {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);
  console.log(topicList);

  return (
    <div>
      <h2 className="topic-title">Choose a Topic</h2>
      {topicList.map((topic) => {
        const slug = topic.slug;

        return (
          <div key={slug} className="topics-container">
            <li className="topic-name">
              <Link to={`/topics/${slug}`}>
                <h2>{slug.toUpperCase()}</h2>
              </Link>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
