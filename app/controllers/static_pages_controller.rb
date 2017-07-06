require 'pry'

class StaticPagesController < ApplicationController

  def root
    if !!params["query"]
      @rubygems = Gems.search params["query"].downcase
      @rubygems.each do |i|
        if i["name"] == params["query"].downcase
          @rubygem = i
        end
      end
    end
    render :root
  end

  def favorites
  end

end
