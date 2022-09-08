class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :ticket_id
end
