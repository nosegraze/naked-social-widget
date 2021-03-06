jQuery(document).ready(function ($) {

    /**
     * Code from relCopy
     */
    nwsAddSite = function (id) {

        var parent = id;
        var toCopy = $(parent).find('.naked-social-widget-site');
        var counter = $(toCopy).length;
        var master = $(parent).find('.naked-social-widget-site:first');
        var clone = $(master).clone(true);

        // Increment Clone IDs
        if ($(clone).attr('id')) {
            var newid = $(clone).attr('id') + (counter + 1);
            $(clone).attr('id', newid);
        }

        // Increment Clone Children IDs
        $(clone).find('[id]').each(function () {
            var newid = $(this).attr('id') + (counter + 1);
            $(this).attr('id', newid);
        });

        //Clear Inputs/Textarea
        $(clone).find(':input').each(function () {
            var type = $(this).attr('type');
            switch (type) {
                case "button":
                    break;
                case "reset":
                    break;
                case "submit":
                    break;
                case "checkbox":
                    $(this).attr('checked', '');
                    break;
                default:
                    $(this).val("");
            }

            $(this).attr("name", function (i, oldVal) {
                if (!oldVal) {
                    return false;
                }
                return oldVal.replace(/\[sites\]\[(\d+)\]/, function (_, m) {
                    return "[sites][" + toCopy.length + "]";
                });
            });
        });

        $(parent).find('.naked-social-widget-site:last').after(clone);

        return false;

    };

});