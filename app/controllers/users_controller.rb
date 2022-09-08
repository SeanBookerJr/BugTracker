class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  skip_before_action :authorize, only: [:create, :update]

  # GET /users or /users.json
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1 or /users/1.json
  def show
    render json: @users
  end

  # GET /users/new
  def new
    @user = User.new
    render json: @users
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users or /users.json
  def create
    @user = User.create!(user_params)
    @developer = Developer.find_by(id: user_params[:developer_id])
    @manager = Manager.find_by(id: user_params[:manager_id])
    @admin = Admin.find_by(id: user_params[:admin_id])

    if @developer.nil?
      @developer = Developer.find(Developer.pluck(:id).sample)
      @user.developer = @developer
    end

    if @manager.nil?
      @manager = Manager.find(Manager.pluck(:id).sample)
      @user.manager = @manager
    end

    if @admin.nil?
      @admin = Admin.find(Admin.pluck(:id).sample)
      @user.admin = @admin
    end
    
      if @user.save
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity 
      end
  end

  # PATCH/PUT /users/1 or /users/1.json
  def update
    @user.update(user_params)
    render json: @user
  end

  # DELETE /users/1 or /users/1.json
  def destroy
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url, notice: "User was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:id, :username, :password, :first_name, :last_name, :email, :account_type, :developer_id, :manager_id, :admin_id)
    end
end
