{
  // let createPost = function () {
  //     let postForm = $('#new-post-form');
  //     postForm.submit(function (e) {
  //         //preventing default actions
  //         e.preventDefault();
  //         $.ajax({
  //             type: 'post',
  //             url: '/posts/create',
  //             data: postForm.serialize(),
  //             success: function (data) {
  //                 console.log(data);
  //                 let newPostData=newPost(data.data.post);
  //                 $(' #post-list-container').prepend(newPostData);
  //                 //mentioning that this class is under newPostData in jquery...
  //                 // console.log('Dhan Nirankar Ji')
  //                 deletePost($('.delete-post-button',newPostData));
  //                 // addComments();
  //                 new ToggleLike($(' .toggle-like-button',newPostData));
  //             }, error: function (error) {
  //                 console.log(error.responseText);
  //             }
  //         })
  //     })
  function editCamp(e) {
    // yelpcamp-edit-btn_64428ea29b8cee50cdc64a88
    console.log(e.id);
    let campID = e.id.split("_")[1];
    console.log(campID);
    let yelpcampForm = $(`#yelpcamp-form-${campID}`);
    console.log(yelpcampForm);
    yelpcampForm.submit(function (e) {
      e.preventDefault();
      $.ajax({
        type: "post",
        url: "/func/edit",
        data: yelpcampForm.serialize(),
        success: function (data) {
          console.log(data);
          var modal = document.getElementById(`exampleModal${campID}`);
          console.log(modal);
          if (modal) {
            $(`#exampleModal${campID}`).hide();
              $(".modal-backdrop").remove();
            //   updateContact(data,contactId[1]);
          } else {
            console.log(`Modal ${campID} not found.`);
          }
        },
      });
    });
  }
}
