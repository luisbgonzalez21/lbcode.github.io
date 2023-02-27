(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    
    }

    createCustomer(0, 'Lauren', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit ut ad doloribus sit exercitationem voluptatum quos. Omnis, veritatis cumque.')
    createCustomer(1, 'John', 'Nam nunc est, commodo eget erat a, aliquam consectetur ante. Integer et diam rhoncus, eleifend velit eu, iaculis sapien. Vivamus at pretium erat. Mauris lectus enim, pellentesque id tellus a, gravida dictum magna. Etiam ac nisi eget enim volutpat hendrerit. Integer suscipit iaculis est eget tincidunt.')
    createCustomer(2, 'Julius', 'Nulla massa risus, condimentum sit amet interdum quis, maximus laoreet ligula. Sed vitae interdum arcu, sit amet finibus tellus. Vestibulum efficitur commodo blandit. In mollis turpis at ligula varius auctor. Pellentesque sit amet augue ullamcorper felis rutrum vehicula a sed erat. Class aptent taciti sociosqu ad litora')
    createCustomer(3, 'Pablo', 'torquent per conubia nostra, per inceptos himenaeos. Ut vitae interdum purus, nec scelerisque ligula. Vestibulum id leo erat. Integer iaculis orci lacus, eu aliquam ex porta vitae. Nulla dignissim arcu suscipit, convallis velit vitae, aliquet odio. Pellentesque interdum maximus turpis sed lobortis.')
    createCustomer(4, 'Amy', 'Etiam vel sapien ac risus accumsan ultrices. Aenean sed magna accumsan, viverra lectus eget, sagittis mauris. Morbi arcu diam, eleifend in neque sit amet, pretium condimentum massa. Vestibulum metus mi')

    btn.forEach(function(button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text

            }
        })

    })

})()