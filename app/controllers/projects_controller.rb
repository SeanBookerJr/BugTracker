class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy, :get_tickets]
  skip_before_action :authorize, only: [:create, :get_tickets, :update, :destroy]

  # GET /projects or /projects.json
  def index
    @projects = Project.all
    render json: @projects
  end

  # GET /projects/1 or /projects/1.json
  def show
    render json: @projects
  end

  # GET /projects/new
  def new
    @project = Project.new
    render json: @projects
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects or /projects.json
  def create
    @project = Project.create!(project_params)
    @manager = Manager.find_by(id: project_params[:manager_id])

    if @user.nil?
      @user = current_user
      @project.user = @user
    end

    if @manager.nil?
      @manager = Manager.find(Manager.pluck(:id).sample)
      @project.manager = @manager
    end
    
      if @project.save
        render json: @project
      else
        render json: @project.errors, status: :unprocessable_entity 
      end
  end

  def get_tickets
    render json: @project
  end

  # PATCH/PUT /projects/1 or /projects/1.json
  def update
    @project.update(project_params)
    render json: @project
  end

  # DELETE /projects/1 or /projects/1.json
  def destroy
    @project.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.permit(:title, :description, :user_id, :developer_id, :manager_id, :admin_id)
    end
end
