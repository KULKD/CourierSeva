import React from 'react'

export const Profile = () => {
  
  
    return (
    <div>
          <section class="vh-100" style={{backgroundColor: "#fee2f8",
    backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)"}}>
      <img className="logo" height="100" src={require("../../images/bglogo.png")} ></img>
  <div class="container h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100" >
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{"border-radius": "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">
                <span id="err5"></span>
                
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" name="username" class="form-control"  />
                      <label class="form-label" for="username">Username</label>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email"  name="email" class="form-control" />
                      <label class="form-label" for="email">Email</label>
                      <span id="err2"></span>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    
                    <div class="form-outline flex-fill mb-0">
                    <span id="err3"></span>
                      <input type="password"name="password" class="form-control" />
                      <label class="form-label" for="password">Password</label>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4" >
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" name="repassword" class="form-control"  />
                      <label class="form-label" for="">Repeat your password</label>
                    
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" name="contact" class="form-control" />
                      <label class="form-label" for="contact">Contact</label>
                      <span id="err4"></span>
                    </div>
                
                  </div>
                 <button className='custom-btn btn-11' >Next</button>
                </form>
  
              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={car}
                  class="img-fluid" alt="Sample image" style={{"borderRadius": "25px"}}  />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
