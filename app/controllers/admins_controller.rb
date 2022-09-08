class AdminsController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  skip_before_action :authorize, only: [:create]

  # GET /admins or /admins.json
  def index
    @admins = Admin.all
    render json: @admins
  end

  # GET /admins/1 or /admins/1.json
  def show
    render json: @admins
  end

  # GET /admins/new
  def new
    @admin = Admin.new
    render json: @admins
  end

  # GET /admins/1/edit
  def edit
    render json: @admins
  end

  # POST /admins or /admins.json
  def create 
    @admin = Admin.create!(admin_params)

    respond_to do |format|
      if @admin.save
        render json: @admin
      else
        render json: @admin.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /admins/1 or /admins/1.json
  def update
    respond_to do |format|
      if @admin.update(admin_params)
        format.html { redirect_to admin_url(@admin), notice: "Admin was successfully updated." }
        format.json { render :show, status: :ok, location: @admin }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @admin.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admins/1 or /admins/1.json
  def destroy
    @admin.destroy

    respond_to do |format|
      format.html { redirect_to admins_url, notice: "Admin was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin
      @admin = Admin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def admin_params
      params.permit(:username, :password, :first_name, :last_name, :email, :account_type)
    end
end
