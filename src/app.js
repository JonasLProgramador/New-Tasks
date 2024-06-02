$(document).ready(function() {
    const clientID = '7fbf63f7275d48e9869b91c3a20ddad1';
    const clientSecret = 'f3ad92c802ca44e9be672b533b56e953';
    const redirectURI = 'http://127.0.0.1:5500'; 
    let accessToken = null;

   
    $('#login').click(function() {
        const authURL = `https://todoist.com/oauth/authorize?client_id=${clientID}&scope=data:read_write&state=secret&redirect_uri=${redirectURI}`;
        window.location.href = authURL;
    });

  
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        $.post('https://todoist.com/oauth/access_token', {
            client_id: clientID,
            client_secret: clientSecret,
            code: code,
            redirect_uri: redirectURI
        }).done(function(data) {
            accessToken = data.access_token;
            $('#new-task').show();
            $('#add-task').show();
            $('#login').hide();
            $('.paragraph').hide();
            fetchTasks();
        }).fail(function(error) {
            console.error('Error exchanging code for token', error);
        });
    }


    function fetchTasks() {
        if (!accessToken) return;

        $.ajax({
            url: 'https://api.todoist.com/rest/v2/tasks',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            success: function(tasks) {
                $('#task-list').empty();
                tasks.forEach(task => {
                    $('#task-list').append(
                        `<li data-id="${task.id}">${task.content} <span class="delete-btn">x</span></li>`
                    );
                });
            }
        });
    }

   
    $('#add-task').click(function() {
        const taskContent = $('#new-task').val();
        if (taskContent && accessToken) {
            $.ajax({
                url: 'https://api.todoist.com/rest/v2/tasks',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({ content: taskContent }),
                success: function() {
                    fetchTasks();
                    $('#new-task').val('');
                }
            });
        }
    });

   
    $('#task-list').on('click', '.delete-btn', function() {
        const taskId = $(this).parent().data('id');
        if (taskId && accessToken) {
            $.ajax({
                url: `https://api.todoist.com/rest/v2/tasks/${taskId}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                success: function() {
                    fetchTasks();
                }
            });
        }
    });
});
