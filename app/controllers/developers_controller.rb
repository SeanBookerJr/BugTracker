class DevelopersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  skip_before_action :authorize, only: [:create]

  # GET /developers or /developers.json
  def index
    @developers = Developer.all
    render json: @developers
  end

  # GET /developers/1 or /developers/1.json
  def show
    render json: @developers
  end

  # GET /developers/new
  def new
    @developer = Developer.new(manager_id: params[:manager_id])
    render json: @developers
  end

  # GET /developers/1/edit
  def edit
  end

  # POST /developers or /developers.json
  def create
    @developer = Developer.create!(developer_params)
    @manager = Manager.find_by(id: developer_params[:manager_id])

    if @manager.nil?
      @manager = Manager.find(Manager.pluck(:id).sample)
      @developer.manager = @manager
    end

      if @developer.save
        render json: @developer
      else   
        render json: @developer.errors, status: :unprocessable_entity 
      end
  end

  # PATCH/PUT /developers/1 or /developers/1.json
  def update
    respond_to do |format|
      if @developer.update(developer_params)
        format.html { redirect_to developer_url(@developer), notice: "Developer was successfully updated." }
        format.json { render :show, status: :ok, location: @developer }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @developer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /developers/1 or /developers/1.json
  def destroy
    @developer.destroy

    respond_to do |format|
      format.html { redirect_to developers_url, notice: "Developer was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_developer
      @developer = Developer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def developer_params
      params.permit(:username, :password, :first_name, :last_name, :email, :account_type, :manager_id, :admin_id)
    end
end
