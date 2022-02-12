/* 
************************************** 
Default Options
************************************** 

    targetItem: "[data-expand-item]",
    target expand items. || Type: string default: "[data-expand-item]"; || Can also use  eg: $('.card') || '.card' 
===================================================================
   
   loadLessButton: "[data-expand-less]",
    This option helps to target expand less button. ||  Type: string || default: "[data-expand-less]"; || Can also use eg: $('.btn-show-less') || '.btn-show-less' 

* ===================================================================
   loadMoreButton: "[data-expand-more]",
   This option helps to target expand more button. || Type: string || default: "[data-expand-more]"; Can use || $('.btn-show-more') || '.btn-show-more' 

===================================================================
    initialVisible: 1,
     Item Initial visibleNumber. ||  Type: integer || default: 1|| Can use "data-initial-visible" attribute on target Element eg: <div class="card-section" data-initial-visible="4">

===================================================================
    itemLoadNumber: 1,
    item number to load on each click until get max length. || Type: integer ||  default: 1|| Can use "data-expand-by" attribute on target Element eg: <div class="card-section" data-initial-visible="4" data-expand-by="1">
===================================================================

    moveDown: true,
     scroll down to the current last item. //Type: boolean ||  default:true;
 ===================================================================

    minimizeToInitial: false
    This option helps to reduce item to the initial visibile items at once.  //Type: boolean ||  default: false;
===================================================================

    reachToMaxAlert: true
    This option helps to alert when item number reach to maximun.  //Type: boolean ||  default: true;
===================================================================
***** ***** ***** *****
 Callbacks
***** ***** ***** *****

===================================================================

    onLoad: null
    //On plugin initialize or item trigger the action buttons 
    Example: 
    onLoad: function () {
       console.log('function load!!!!')
    }
    * 
===================================================================

===================================================================
    onComplete: null
    //On hit the last item.
    Example:
    onComplete: function () {
       console.log('Reached to Max Item!!')
    }
===================================================================
*/
