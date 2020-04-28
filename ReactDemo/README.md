React Router

BroweserRouter 
        ==>aane aapde root component ma rakhvu pade

Route
        ==>jyare specific route hase tyare kyo component use thavo joiye ee set karva mate

        <Route path="/" component={Home} />
                    <Route path="/about" component={About} />

        /about ma home component and about component banne display thase bcz / ee about ma bhi aave chhe hu jo home component ne /home and about ne /about karu to banne alag alag display thase.

        <Route exact path="/" component={Home} /> // aavi rite "exact "lakhi ne bhi aapde banne ne separe kari sakiye.


Link ===>(/* a href to link to */ )page reload nai thai

        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>

        ==>aama page reload thase aapde app.js ma component no path to aapi didho but aapde jyar ehome per click karsu tyare page reload thase bcz ee react ni tag through update nai thatu to aapde reloade na thao component eevu karvu hoy to aapde LINK no use thase.

        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>

        ==>aama NavLink ni jem class active nai thai.

        
NavLink===> Similar to Link

            Link and NavLink ma etlo j farak chhe ke aapde NavLInk no use kariye etle jyare ee link call thase to ee inspect ma ee tag sudhi jai ne button dabavsu to direct eena class ma na active add thai jase cass property ma active  thai jase.
