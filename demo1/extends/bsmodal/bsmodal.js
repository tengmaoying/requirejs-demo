define(["jquery"],
	function($) {
		var html = `
			<div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: block; padding-right: 17px;">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">New message to @mdo</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">×</span>
			        </button>
						</div>
						<div class="modal-body">
							<form lpformnum="1">
								<div class="form-group">
									<label for="recipient-name" class="col-form-label">Recipient:</label>
									<input type="text" class="form-control" id="recipient-name">
								</div>
								<div class="form-group">
									<label for="message-text" class="col-form-label">Message:</label>
									<textarea class="form-control" id="message-text"></textarea>
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary">Send message</button>
						</div>
					</div>
				</div>
			</div>
		`;
		return $.fn.extend({
			//js
			bsmodal: function(option) {
				return this.each(function() {
					var bsmodal = $(this);
					bsmodal.html(html);
				});
			}
		});
	}
)