import React from "react";
const Story = (props) => {
  const stories = props.stories;

  return (
    <div>
      <p>{stories}</p>
    </div>
  );
};

export default Story;
