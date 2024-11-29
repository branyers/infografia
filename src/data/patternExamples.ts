export const patternExamples = {
  Singleton: `
public sealed class DatabaseConnection
{
    private static DatabaseConnection instance = null;
    private static readonly object padlock = new object();

    private DatabaseConnection()
    {
        // Constructor privado
    }

    public static DatabaseConnection Instance
    {
        get
        {
            lock (padlock)
            {
                if (instance == null)
                {
                    instance = new DatabaseConnection();
                }
                return instance;
            }
        }
    }

    public void Connect()
    {
        Console.WriteLine("Conectado a la base de datos");
    }
}

// Uso
DatabaseConnection.Instance.Connect();`,

  "Factory Method": `
public interface IVehicle
{
    void Start();
    void Stop();
}

public class Car : IVehicle
{
    public void Start() => Console.WriteLine("Coche arrancado");
    public void Stop() => Console.WriteLine("Coche detenido");
}

public class Motorcycle : IVehicle
{
    public void Start() => Console.WriteLine("Moto arrancada");
    public void Stop() => Console.WriteLine("Moto detenida");
}

public abstract class VehicleFactory
{
    public abstract IVehicle CreateVehicle();
}

public class CarFactory : VehicleFactory
{
    public override IVehicle CreateVehicle() => new Car();
}

public class MotorcycleFactory : VehicleFactory
{
    public override IVehicle CreateVehicle() => new Motorcycle();
}

// Uso
VehicleFactory factory = new CarFactory();
IVehicle vehicle = factory.CreateVehicle();
vehicle.Start();`,

  "Abstract Factory": `
public interface IButton { void Render(); }
public interface ICheckbox { void Render(); }

public class WindowsButton : IButton
{
    public void Render() => Console.WriteLine("Renderizando botón de Windows");
}

public class MacButton : IButton
{
    public void Render() => Console.WriteLine("Renderizando botón de Mac");
}

public class WindowsCheckbox : ICheckbox
{
    public void Render() => Console.WriteLine("Renderizando checkbox de Windows");
}

public class MacCheckbox : ICheckbox
{
    public void Render() => Console.WriteLine("Renderizando checkbox de Mac");
}

public interface IGUIFactory
{
    IButton CreateButton();
    ICheckbox CreateCheckbox();
}

public class WindowsFactory : IGUIFactory
{
    public IButton CreateButton() => new WindowsButton();
    public ICheckbox CreateCheckbox() => new WindowsCheckbox();
}

public class MacFactory : IGUIFactory
{
    public IButton CreateButton() => new MacButton();
    public ICheckbox CreateCheckbox() => new MacCheckbox();
}

// Uso
IGUIFactory factory = new WindowsFactory();
IButton button = factory.CreateButton();
button.Render();`,

  Adapter: `
public interface ITarget
{
    string GetRequest();
}

public class Adaptee
{
    public string GetSpecificRequest()
    {
        return "Solicitud específica";
    }
}

public class Adapter : ITarget
{
    private readonly Adaptee _adaptee;

    public Adapter(Adaptee adaptee)
    {
        _adaptee = adaptee;
    }

    public string GetRequest()
    {
        return $"Adaptado: {_adaptee.GetSpecificRequest()}";
    }
}

// Uso
Adaptee adaptee = new Adaptee();
ITarget target = new Adapter(adaptee);
Console.WriteLine(target.GetRequest());`,

  Observer: `
public interface IObserver
{
    void Update(string message);
}

public class NewsAgency
{
    private List<IObserver> _observers = new List<IObserver>();
    
    public void Attach(IObserver observer)
    {
        _observers.Add(observer);
    }
    
    public void Detach(IObserver observer)
    {
        _observers.Remove(observer);
    }
    
    public void NotifyObservers(string news)
    {
        foreach (var observer in _observers)
        {
            observer.Update(news);
        }
    }
}

public class NewsChannel : IObserver
{
    private string _name;
    
    public NewsChannel(string name)
    {
        _name = name;
    }
    
    public void Update(string news)
    {
        Console.WriteLine($"{_name} recibió la noticia: {news}");
    }
}

// Uso
var newsAgency = new NewsAgency();
var channel1 = new NewsChannel("Canal 1");
var channel2 = new NewsChannel("Canal 2");

newsAgency.Attach(channel1);
newsAgency.Attach(channel2);
newsAgency.NotifyObservers("¡Breaking News!");`,

  Strategy: `
public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

public class CreditCardPayment : IPaymentStrategy
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Pagando {amount} con tarjeta de crédito");
    }
}

public class PayPalPayment : IPaymentStrategy
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Pagando {amount} con PayPal");
    }
}

public class ShoppingCart
{
    private IPaymentStrategy _paymentStrategy;

    public void SetPaymentStrategy(IPaymentStrategy strategy)
    {
        _paymentStrategy = strategy;
    }

    public void Checkout(decimal amount)
    {
        _paymentStrategy.Pay(amount);
    }
}

// Uso
var cart = new ShoppingCart();
cart.SetPaymentStrategy(new CreditCardPayment());
cart.Checkout(100.00m);`
};