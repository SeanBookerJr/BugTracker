class TicketsController < ApplicationController
  before_action :set_ticket, only: [:show, :edit, :update, :destroy, :details]
  skip_before_action :authorize, only: [:create, :show, :details]

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

    if @user.nil?
      @user = current_user
      @project.user = @user
    end

    if @ticket.save
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity 
    end
  end

  def details
    render json: @ticket
    
  end

  # PATCH/PUT /tickets/1 or /tickets/1.json
  def update
    respond_to do |format|
      if @ticket.update(ticket_params)
        format.html { redirect_to ticket_url(@ticket), notice: "Ticket was successfully updated." }
        format.json { render :show, status: :ok, location: @ticket }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ticket.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tickets/1 or /tickets/1.json
  def destroy
    @ticket.destroy

    respond_to do |format|
      format.html { redirect_to tickets_url, notice: "Ticket was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ticket_params
      params.permit(:title, :type, :priority, :description, :status, :user_id, :developer_id, :manager_id, :admin_id, :project_id)
    end
end
