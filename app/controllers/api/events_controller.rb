class Api::EventsController < ApplicationController

  def index
    events = Event.all

    if events
      @events = events
      render 'api/events/index', status: 200
    else
      @errors = events.errors.full_messages
      render 'api/shared/error', status: 400
    end
  end

  def show
  end

  def create
    event = Event.create(event_params)
    render json: event
  end

  def destroy
  end

  private

  def event_params
    params.require(:event).permit(:name, :start_date, :recurrences, :delivery_date, :calculated_date)
  end


end
