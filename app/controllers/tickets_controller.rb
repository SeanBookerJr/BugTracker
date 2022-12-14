class TicketsController < ApplicationController
  before_action :set_ticket, only: [:show, :edit, :update, :destroy, :details, :ticket_comments]
  skip_before_action :authorize, only: [:create, :show, :details, :update, :destroy, :ticket_comments]

  # GET /tickets or /tickets.json
  def index
    @tickets = Ticket.all
    render json: @tickets
  end

  # GET /tickets/1 or /tickets/1.json
  def show
    render json: @tickets

  end

  # GET /tickets/new
  def new
    @ticket = Ticket.new
    render json: @tickets
  end

  # GET /tickets/1/edit
  def edit
  end

  # POST /tickets or /tickets.json
  def create
    @ticket = Ticket.create!(ticket_params)
    @developer = Developer.find_by(id: ticket_params[:developer_id])
    # @developer = Developer.find(Developer.pluck(:id).sample)

    if @user.nil?
      @user = current_user
      @ticket.user = @user
    end

    if @developer.nil?
      @developer = Developer.find(Developer.pluck(:id).sample)
      @ticket.developer = @developer
    end

    if @ticket.save
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity 
    end
  end
 

  def details
    render json: @ticket

    mark_notifications_as_read
  end

  def ticket_comments
    render json: @ticket.comments
    
  end

  # PATCH/PUT /tickets/1 or /tickets/1.json
  def update
    @ticket.update(ticket_params)
    render json: @ticket
  end

  # DELETE /tickets/1 or /tickets/1.json
  def destroy
    @ticket.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ticket_params
      params.permit(:title, :type_of, :status, :priority, :description, :user_id, :developer_id, :manager_id, :admin_id, :project_id)
    end

    def mark_notifications_as_read
      if current_user
        notifications_to_mark_as_read = @ticket.notifications_as_ticket.where(recipient: current_user)
        notifications_to_mark_as_read.update_all(read_at: Time.zone.now)
     end 
    end
end
