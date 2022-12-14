class Comment < ApplicationRecord
    
    belongs_to :commentable, polymorphic: true, optional: true
    belongs_to :user, optional: true
    belongs_to :ticket, optional: true


    after_create_commit :notify_recipient
    before_destroy :cleanup_notifications
    
    has_noticed_notifications

    private

    def notify_recipient
        CommentNotification.with(comment: self, ticket: ticket).deliver_later(ticket.user)
        CommentNotification.with(comment: self, ticket: ticket).deliver_later(ticket.developer)
        CommentNotification.with(Comment: self, ticket: ticket).deliver_later(ticket.manager)
    end

    def cleanup_notifications
        notifications_as_comment.destroy_all     
    end

end
