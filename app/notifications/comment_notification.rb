# To deliver this notification:
#
#  CommentNotification.with(comment: @comment).deliver_later(current_user)
# CommentNotification.with(post: @post).deliver(current_user)

class CommentNotification < Noticed::Base
  # Add your delivery methods
  #
   deliver_by :database
  # deliver_by :email, mailer: "UserMailer"
  # deliver_by :slack
  # deliver_by :custom, class: "MyDeliveryMethod"

  # Add required params
  #
  #  param :comment

  # Define helper methods to make rendering easier.
  #
  #  def message
  #    @ticket = Ticket.find(params[:comment][:ticket_id])
  #    @comment = Comment.find(params[:comment][:id])
  #    @user = User.find(@comment.commentable_id)

  #   "#{@user.first_name} #{@user.last_name} commented on #{@ticket.title.truncate(10)}"
  #  end
  
  # def url
  #   post_path(Ticket.find(params[:comment][:ticket_id]))
  # end
end
