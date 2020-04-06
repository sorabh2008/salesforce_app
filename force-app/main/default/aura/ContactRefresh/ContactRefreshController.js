({
	createContact : function(component, event, helper) {
		console.log('inside create contact');
        $A.get('e.force:refreshView').fire();
        console.log('event fired');
	}
})