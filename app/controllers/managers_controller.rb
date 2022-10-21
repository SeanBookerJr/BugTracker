class ManagersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  skip_before_action :authorize, only: [:create, :update]

  # GET /managers or /managers.json
  def index
    @managers = Manager.all
    render json: @managers
  end

  # GET /managers/1 or /managers/1.json
  def show
    render json: @managers
  end

  # GET /managers/new
  def new
    @manager = Manager.new
    render json: @managers
  end

  # GET /managers/1/edit
  def edit
  end

  # POST /managers or /managers.json
  def create
    @manager = Manager.create!(manager_params)
    @admin = Admin.find_by(id: manager_params[:admin_id])

    if @admin.nil?
      @admin = Admin.find(Admin.pluck(:id).sample)
      @manager.admin = @admin
    end

      if @manager.save
        render json: @manager
      else
        render json: @manager.errors, status: :unprocessable_entity 
      end
  end

  # PATCH/PUT /managers/1 or /managers/1.json
  def update
    @user.update(manager_params)
    render json: @manager
  end

  # DELETE /managers/1 or /managers/1.json
  def destroy
    @manager.destroy

    respond_to do |format|
      format.html { redirect_to managers_url, notice: "Manager was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manager
      @manager = Manager.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def manager_params
      params.permit(:username, :password, :first_name, :last_name, :email, :account_type, :admin_id)
    end
end
