class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :ticket_id, :created_at, :updated_at, :commentable_id, :commentable_type
  
end
