export const createPost = (posts, content, image, user) => {
  return [
    {
      id: Date.now(),
      content,
      image,
      user,
    },
    ...posts,
  ];
};

export const deletePost = (posts, id) => {
  return posts.filter((p) => p.id !== id);
};

export const updatePost = (posts, id, newContent, newImage) => {
  return posts.map((p) =>
    p.id === id
      ? {
          ...p,
          content: newContent,
          image: newImage !== undefined ? newImage : p.image,
        }
      : p,
  );
};
