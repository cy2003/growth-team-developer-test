require 'pry'

class StaticPagesController < ApplicationController

  def root
    if !!params["query"]
      @rubygems = Gems.search params["query"]
      @rubygems.each do |i|
        if i["name"] == params["query"]
          @rubygem = i
        end
      end
    end
    render :root
  end

  def favorites
  end

end
