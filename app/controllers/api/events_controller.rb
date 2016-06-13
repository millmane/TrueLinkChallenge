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
  end

  def destroy
  end

end
