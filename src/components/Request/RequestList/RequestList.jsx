export const RequestList = (props) => {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} style={{marginBottom: "25px"}}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
