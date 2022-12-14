class ApplicationController < ActionController::Base
    include ActionController::Cookies
    include ActiveStorage::Blob::Analyzable

    before_action :authorize
    before_action :set_notifications, if: :current_user
    skip_before_action :verify_authenticity_token


    private

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end

    def current_developer
        @current_developer ||= Developer.find_by(id: session[:developer_id])
    end

    def current_manager
        @current_manager ||= Manager.find_by(id: session[:manager_id])
    end
    
    def current_admin
        @current_admin ||= Admin.find_by(id: session[:admin_id])
    end

    def current_project
        @current_project ||= Project.find_by(id: params[:project_id])
    end

    def current_ticket
        @current_ticket ||= Ticket.find_by(id: params[:ticket_id])
    end

    def set_notifications
        
        notifications = Notification.where(recipient: current_user).newest_first.limit(9)
        @unread = notifications.unread
        @read = notifications.read
    end
      
    def authorize
        unless current_user
            render json: { message: 'Not authorized' }, status: 401
        end

        unless current_developer
            render json: { message: 'Not authorized' }, status: 401
        end

        unless current_manager
            render json: { message: 'Not authorized' }, status: 401
        end

        unless current_admin
            render json: { message: 'Not authorized' }, status: 401
        end
    end
end
