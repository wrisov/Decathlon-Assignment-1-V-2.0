export const fetchComments = (productId) => (
  $.ajax({
    method: 'GET',
    url: `api/products/${productId}/comments`
  })
);

export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: {comment}
  })
);

export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: {comment}
  })
);

export const deleteComment = (id) => (
  $.ajax({
    method: `DELETE`,
    url: `api/comments/${id}`
  })
);
