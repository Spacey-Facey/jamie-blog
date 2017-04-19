module ApplicationHelper

  # Return full title based on the current page
  def full_title(page_title = "")
    base_title = "Space Bubbles"
    if page_title.empty?
      base_title
    else
      page_title + " | " + base_title
    end
  end
end
