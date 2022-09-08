class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :show, :destroy]

    def show
        if current_user
            render json: current_user
        elsif current_developer
            render json: current_developer
        elsif current_manager
            render json: current_manager
        elsif current_admin
            render json: current_admin
        else
            render json: { message: "not logged in"}, status: 401
        end
    end

    def create
        user = User.find_by(username: params[:username])
        developer = Developer.find_by(username: params[:username])
        manager = Manager.find_by(username: params[:username])
        admin = Admin.find_by(username: params[:username])

        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        elsif developer&.authenticate(params[:password])
                session[:developer_id] = developer.id
                render json: developer
        elsif manager&.authenticate(params[:password])
                session[:manager_id] = manager.id
                render json: manager
        elsif admin&.authenticate(params[:password])
                session[:admin_id] = admin.id
                render json: admin
        else
            render json: { error: "Invalid username or password" }, status: 401
        end

    end

    def destroy
        [:user_id, :developer_id, :manager_id, :admin_id].each { |x| session.delete(x) }
        head :no_content
    end

end
